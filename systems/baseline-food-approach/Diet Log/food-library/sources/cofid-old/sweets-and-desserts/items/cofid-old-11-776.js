/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "6 samples, 2 products including Weetabix minibix with fruit and nuts and with banana",
  "id": "cofid-old-11-776",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, wheat biscuit with fruit, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 75.8,
    "energy_kcal": 348.0,
    "fat_g": 3.5,
    "fibre_g": 8.1,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 8.1,
    "salt_g": 0.0,
    "sat_fat_g": 1.08,
    "sodium_mg": 0.0,
    "sugar_g": 24.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-776",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
