/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "8 samples, 50.4 Brix; imported commercial concentrate",
  "id": "cofid-old-14-276",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grapefruit juice concentrate, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 40.8,
    "energy_kcal": 166.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 38.0,
    "iron_mg": 0.6,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 560.0,
    "protein_g": 2.2,
    "salt_g": 0.02,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.0,
    "sugar_g": 40.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 190.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-276",
  "state": "Unspecified",
  "subcategory": "FC",
  "tags": [
    "beverages",
    "fc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
