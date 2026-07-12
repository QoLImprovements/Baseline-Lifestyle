/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples from different outlets, nachos with melted cheese",
  "id": "cofid-old-11-428",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nachos, cheese, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 274.0,
    "carbs_g": 13.9,
    "energy_kcal": 257.0,
    "fat_g": 18.1,
    "fibre_g": 3.4,
    "folate_ug": 24.0,
    "iron_mg": 0.89,
    "magnesium_mg": 34.0,
    "omega3_g": 0.67,
    "phosphorus_mg": 234.0,
    "potassium_mg": 186.0,
    "protein_g": 10.6,
    "salt_g": 1.09,
    "sat_fat_g": 7.28,
    "sodium_mg": 436.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 124.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-428",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
