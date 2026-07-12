/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "16 samples",
  "id": "cofid-current-12-348",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Cheddar type, half fat",
  "nutritionPerBasis": {
    "calcium_mg": 840.0,
    "carbs_g": 0.0,
    "energy_kcal": 273.0,
    "fat_g": 15.8,
    "fibre_g": 0.0,
    "folate_ug": 56.0,
    "iron_mg": 0.2,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 620.0,
    "potassium_mg": 110.0,
    "protein_g": 32.7,
    "salt_g": 1.675,
    "sat_fat_g": 9.9,
    "sodium_mg": 670.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 210.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-348",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
