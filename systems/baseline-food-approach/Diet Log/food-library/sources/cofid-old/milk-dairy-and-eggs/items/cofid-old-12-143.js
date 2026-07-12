/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, assorted flavours",
  "id": "cofid-old-12-143",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese spread, flavoured",
  "nutritionPerBasis": {
    "calcium_mg": 430.0,
    "carbs_g": 4.4,
    "energy_kcal": 258.0,
    "fat_g": 20.5,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 0.2,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 740.0,
    "potassium_mg": 140.0,
    "protein_g": 14.2,
    "salt_g": 2.825,
    "sat_fat_g": 12.8,
    "sodium_mg": 1130.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 261.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-143",
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
