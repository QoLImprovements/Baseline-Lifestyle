/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "2-tablespoon",
  "description": "Sweets",
  "id": "usda-sr-legacy-168845",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "2-tablespoon",
      "kind": "unit",
      "label": "2 tablespoon"
    }
  ],
  "name": "Frostings, chocolate, creamy, dry mix, prepared with margarine",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 71.0,
    "energy_kcal": 404.0,
    "fat_g": 12.9,
    "fibre_g": 1.9,
    "folate_ug": 2.0,
    "iron_mg": 0.93,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 143.0,
    "protein_g": 1.1,
    "salt_g": 0.4075,
    "sat_fat_g": 1.74,
    "sodium_mg": 163.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168845",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "oils-and-fats",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
