{
    // interface IPoint2D { x: number; y: number }
    // interface IPoint3D { x: number; y: number; z: number }


    interface IPoint2D { x: number; y: number }

    interface IPoint3D extends IPoint2D{
        z: number
    }

    const p1: IPoint3D = {
        x: 100,
        y: 100,
        z: 100
    }

}