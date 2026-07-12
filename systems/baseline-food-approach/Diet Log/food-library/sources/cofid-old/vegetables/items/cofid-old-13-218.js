/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 10 brands; boiled 4-9 minutes",
  "id": "cofid-old-13-218",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cauliflower, frozen, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 2.0,
    "energy_kcal": 20.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 0.3,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 210.0,
    "protein_g": 2.0,
    "salt_g": 0.0175,
    "sat_fat_g": 0.1,
    "sodium_mg": 7.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 31.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-218",
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
