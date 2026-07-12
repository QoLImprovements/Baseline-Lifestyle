/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from 18g powder to 200ml milk",
  "id": "cofid-current-17-792",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Drinking chocolate powder, made up with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 10.8,
    "energy_kcal": 89.0,
    "fat_g": 3.8,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.31,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 185.0,
    "protein_g": 3.6,
    "salt_g": 0.1425,
    "sat_fat_g": 2.38,
    "sodium_mg": 57.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-792",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "milk-dairy-and-eggs",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
