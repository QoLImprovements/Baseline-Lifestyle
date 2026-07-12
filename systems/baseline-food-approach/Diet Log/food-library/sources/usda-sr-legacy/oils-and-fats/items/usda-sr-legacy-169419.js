/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cup-whole-kernels",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-169419",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 157.0,
      "key": "cup-whole-kernels",
      "kind": "unit",
      "label": "cup whole kernels"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-22-whole-kernels",
      "kind": "unit",
      "label": "oz (22 whole kernels)"
    }
  ],
  "name": "Nuts, almonds, oil roasted, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 291.0,
    "carbs_g": 17.7,
    "energy_kcal": 2540.0,
    "fat_g": 55.2,
    "fibre_g": 10.5,
    "folate_ug": 27.0,
    "iron_mg": 3.68,
    "magnesium_mg": 274.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 466.0,
    "potassium_mg": 699.0,
    "protein_g": 21.2,
    "salt_g": 0.8475,
    "sat_fat_g": 4.21,
    "sodium_mg": 339.0,
    "sugar_g": 4.55,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 26.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169419",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "oils-and-fats",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
