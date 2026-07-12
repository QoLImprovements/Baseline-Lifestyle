/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 4 products, including golden syrup, ginger, fruit flavoured bars",
  "id": "cofid-old-11-741",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake bars, not chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 62.0,
    "energy_kcal": 355.0,
    "fat_g": 12.2,
    "fibre_g": 0.8,
    "folate_ug": 4.0,
    "iron_mg": 0.61,
    "magnesium_mg": 8.0,
    "omega3_g": 0.41,
    "phosphorus_mg": 79.0,
    "potassium_mg": 123.0,
    "protein_g": 3.1,
    "salt_g": 0.5,
    "sat_fat_g": 4.95,
    "sodium_mg": 200.0,
    "sugar_g": 41.9,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-741",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
