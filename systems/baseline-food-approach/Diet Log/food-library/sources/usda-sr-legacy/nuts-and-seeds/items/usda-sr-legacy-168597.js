/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-168597",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Nuts, cashew butter, plain, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 30.3,
    "energy_kcal": 2550.0,
    "fat_g": 53.0,
    "fibre_g": 3.0,
    "folate_ug": 55.0,
    "iron_mg": 4.91,
    "magnesium_mg": 206.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 388.0,
    "potassium_mg": 447.0,
    "protein_g": 12.1,
    "salt_g": 0.7375,
    "sat_fat_g": 10.6,
    "sodium_mg": 295.0,
    "sugar_g": 9.09,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.08,
    "vitamin_k_ug": 30.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168597",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
