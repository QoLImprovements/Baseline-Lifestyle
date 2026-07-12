/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-2-slices",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172962",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "serving-2-slices",
      "kind": "unit",
      "label": "serving 2 slices"
    }
  ],
  "name": "Chicken breast, fat-free, mesquite flavor, sliced",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 2.25,
    "energy_kcal": 80.0,
    "fat_g": 0.39,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.3,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 256.0,
    "potassium_mg": 316.0,
    "protein_g": 16.8,
    "salt_g": 2.6,
    "sat_fat_g": 0.13,
    "sodium_mg": 1040.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172962",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
