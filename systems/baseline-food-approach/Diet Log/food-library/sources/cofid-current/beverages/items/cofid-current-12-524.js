/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands",
  "id": "cofid-current-12-524",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, soya, non-dairy alternative to milk, unsweetened, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 0.5,
    "energy_kcal": 26.0,
    "fat_g": 1.6,
    "fibre_g": 0.5,
    "folate_ug": 14.0,
    "iron_mg": 0.43,
    "magnesium_mg": 15.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 48.0,
    "potassium_mg": 74.0,
    "protein_g": 2.4,
    "salt_g": 0.0,
    "sat_fat_g": 0.24,
    "sodium_mg": 0.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 1.71
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-524",
  "state": "Unspecified",
  "subcategory": "BC",
  "tags": [
    "bc",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
