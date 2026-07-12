/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Average of English Cheddar, Red Leicester and Double Gloucester",
  "id": "cofid-current-12-604",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, hard, average",
  "nutritionPerBasis": {
    "calcium_mg": 707.0,
    "carbs_g": 0.1,
    "energy_kcal": 411.0,
    "fat_g": 34.5,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 0.33,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 487.0,
    "potassium_mg": 77.0,
    "protein_g": 24.9,
    "salt_g": 1.7175,
    "sat_fat_g": 21.57,
    "sodium_mg": 687.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 366.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.57
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-604",
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
