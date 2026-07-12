/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands; boiled 4-10 minutes",
  "id": "cofid-old-13-173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Broccoli, green, frozen, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 2.5,
    "energy_kcal": 31.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 64.0,
    "iron_mg": 0.6,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 240.0,
    "protein_g": 3.3,
    "salt_g": 0.0325,
    "sat_fat_g": 0.1,
    "sodium_mg": 13.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 64.0,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-173",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
