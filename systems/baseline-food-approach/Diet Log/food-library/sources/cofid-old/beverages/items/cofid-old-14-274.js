/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "5 samples, red and white juice, 65.6 Brix; imported commercial concentrate",
  "id": "cofid-old-14-274",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grape juice concentrate",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 58.7,
    "energy_kcal": 228.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.8,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 160.0,
    "protein_g": 1.0,
    "salt_g": 0.0275,
    "sat_fat_g": 0.0,
    "sodium_mg": 11.0,
    "sugar_g": 58.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-274",
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
