/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173587",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Margarine, 80% fat, stick, includes regular and hydrogenated corn and soybean oils",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.7,
    "energy_kcal": 717.0,
    "fat_g": 80.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.12,
    "magnesium_mg": 1.0,
    "omega3_g": 1.966,
    "phosphorus_mg": 5.0,
    "potassium_mg": 18.0,
    "protein_g": 0.16,
    "salt_g": 1.635,
    "sat_fat_g": 15.2,
    "sodium_mg": 654.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.23,
    "vitamin_k_ug": 75.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173587",
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
