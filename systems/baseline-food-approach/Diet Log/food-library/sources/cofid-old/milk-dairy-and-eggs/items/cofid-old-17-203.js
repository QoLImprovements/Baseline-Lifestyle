/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from 40g syrup to 250ml milk",
  "id": "cofid-old-17-203",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milkshake syrup, concentrated, made up with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 9.0,
    "energy_kcal": 75.0,
    "fat_g": 3.4,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.1,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 120.0,
    "protein_g": 2.8,
    "salt_g": 0.1375,
    "sat_fat_g": 2.1,
    "sodium_mg": 55.0,
    "sugar_g": 9.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-203",
  "state": "Unspecified",
  "subcategory": "PAC",
  "tags": [
    "milk-dairy-and-eggs",
    "pac",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
