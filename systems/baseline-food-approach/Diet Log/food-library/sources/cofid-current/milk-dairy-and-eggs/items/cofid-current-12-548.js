/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Including Cathedral City lighter, Pilgrims Choice lighter mature cheese and other/own brands",
  "id": "cofid-current-12-548",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Cheddar type, '30% less fat'",
  "nutritionPerBasis": {
    "calcium_mg": 840.0,
    "carbs_g": 0.8,
    "energy_kcal": 314.0,
    "fat_g": 22.1,
    "fibre_g": 0.0,
    "folate_ug": 56.0,
    "iron_mg": 0.2,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 620.0,
    "potassium_mg": 110.0,
    "protein_g": 27.9,
    "salt_g": 1.8,
    "sat_fat_g": 13.8,
    "sodium_mg": 720.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 294.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-548",
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
