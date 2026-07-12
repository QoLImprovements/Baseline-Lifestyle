/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands",
  "id": "cofid-old-12-123",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, whipping, UHT",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 3.1,
    "energy_kcal": 373.0,
    "fat_g": 39.3,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.4,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 74.0,
    "protein_g": 2.0,
    "salt_g": 0.0825,
    "sat_fat_g": 24.6,
    "sodium_mg": 33.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 609.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-123",
  "state": "Unspecified",
  "subcategory": "BJP",
  "tags": [
    "bjp",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
