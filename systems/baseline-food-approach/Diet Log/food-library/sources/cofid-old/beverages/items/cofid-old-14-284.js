/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "17 samples, 58.4 Brix; imported commercial concentrate",
  "id": "cofid-old-14-284",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Orange juice concentrate, unsweetened, commercial",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 44.9,
    "energy_kcal": 185.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 90.0,
    "iron_mg": 0.4,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 880.0,
    "protein_g": 2.9,
    "salt_g": 0.025,
    "sat_fat_g": 0.1,
    "sodium_mg": 10.0,
    "sugar_g": 44.9,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 210.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-284",
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
