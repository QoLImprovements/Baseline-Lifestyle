/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tbsp-1-nlea-serving",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171431",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp-1-nlea-serving",
      "kind": "unit",
      "label": "tbsp (1 NLEA serving)"
    }
  ],
  "name": "Margarine, margarine-like vegetable oil spread, 67-70% fat, tub",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 0.59,
    "energy_kcal": 2540.0,
    "fat_g": 68.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 2.924,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.07,
    "salt_g": 1.34,
    "sat_fat_g": 16.7,
    "sodium_mg": 536.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3570.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 13.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171431",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
