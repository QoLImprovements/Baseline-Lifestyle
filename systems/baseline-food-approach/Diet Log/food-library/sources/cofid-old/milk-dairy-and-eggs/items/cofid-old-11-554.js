/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Cooked, 10 samples, 3 brands",
  "id": "cofid-old-11-554",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pizza, cheese and tomato, French bread, retail",
  "nutritionPerBasis": {
    "calcium_mg": 240.0,
    "carbs_g": 31.4,
    "energy_kcal": 230.0,
    "fat_g": 7.8,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.1,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 185.0,
    "protein_g": 10.6,
    "salt_g": 0.675,
    "sat_fat_g": 0.0,
    "sodium_mg": 270.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-554",
  "state": "Unspecified",
  "subcategory": "AE",
  "tags": [
    "ae",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
