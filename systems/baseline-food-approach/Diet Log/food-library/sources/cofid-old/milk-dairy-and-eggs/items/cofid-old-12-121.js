/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "5 samples (Sainsbury's)",
  "id": "cofid-old-12-121",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, half, UHT",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 4.3,
    "energy_kcal": 138.0,
    "fat_g": 12.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 130.0,
    "protein_g": 2.8,
    "salt_g": 0.115,
    "sat_fat_g": 7.7,
    "sodium_mg": 46.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 185.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-121",
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
