/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "each-taco",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170333",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "each-taco",
      "kind": "unit",
      "label": "each taco"
    }
  ],
  "name": "TACO BELL, Soft Taco with beef, cheese and lettuce",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 20.2,
    "energy_kcal": 206.0,
    "fat_g": 9.75,
    "fibre_g": 2.9,
    "folate_ug": 52.0,
    "iron_mg": 1.67,
    "magnesium_mg": 19.0,
    "omega3_g": 0.172,
    "phosphorus_mg": 167.0,
    "potassium_mg": 161.0,
    "protein_g": 9.25,
    "salt_g": 1.4,
    "sat_fat_g": 4.16,
    "sodium_mg": 560.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 11.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170333",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
