/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "14 samples, 8 products",
  "id": "cofid-old-12-477",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream, non-dairy, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 20.9,
    "energy_kcal": 165.0,
    "fat_g": 8.1,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.29,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 217.0,
    "protein_g": 3.6,
    "salt_g": 0.19,
    "sat_fat_g": 0.0,
    "sodium_mg": 76.0,
    "sugar_g": 20.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-477",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "beverages",
    "bp",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
