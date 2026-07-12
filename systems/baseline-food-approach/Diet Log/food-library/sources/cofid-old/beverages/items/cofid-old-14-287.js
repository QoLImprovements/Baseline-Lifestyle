/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "13 samples, 56.5 Brix; imported commercial concentrate",
  "id": "cofid-old-14-287",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pineapple juice concentrate, unsweetened, commercial",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 47.5,
    "energy_kcal": 184.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 40.0,
    "iron_mg": 1.1,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 600.0,
    "protein_g": 1.3,
    "salt_g": 0.035,
    "sat_fat_g": 0.0,
    "sodium_mg": 14.0,
    "sugar_g": 47.5,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 82.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-287",
  "state": "Unspecified",
  "subcategory": "PE",
  "tags": [
    "beverages",
    "pe",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
