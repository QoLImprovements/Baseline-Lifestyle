/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "package-1-875-oz-yields",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-169417",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "package-1-875-oz-yields",
      "kind": "unit",
      "label": "package (1.875 oz) yields"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Seeds, sunflower seed kernels from shell, dry roasted, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 15.3,
    "energy_kcal": 2280.0,
    "fat_g": 49.8,
    "fibre_g": 9.0,
    "folate_ug": 237.0,
    "iron_mg": 3.8,
    "magnesium_mg": 129.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1160.0,
    "potassium_mg": 850.0,
    "protein_g": 19.3,
    "salt_g": 15.025,
    "sat_fat_g": 5.22,
    "sodium_mg": 6010.0,
    "sugar_g": 2.73,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 26.1,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169417",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
