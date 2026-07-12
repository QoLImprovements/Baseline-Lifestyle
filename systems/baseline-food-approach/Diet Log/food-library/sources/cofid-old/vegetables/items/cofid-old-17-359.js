/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "8 samples, 4 brands",
  "id": "cofid-old-17-359",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Garlic puree",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 16.9,
    "energy_kcal": 380.0,
    "fat_g": 33.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.1,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 300.0,
    "protein_g": 3.5,
    "salt_g": 6.85,
    "sat_fat_g": 0.0,
    "sodium_mg": 2740.0,
    "sugar_g": 16.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-359",
  "state": "Unspecified",
  "subcategory": "WY",
  "tags": [
    "unspecified",
    "vegetables",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
