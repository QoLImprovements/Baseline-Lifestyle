/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-643",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausage rolls, short pastry, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 25.6,
    "energy_kcal": 395.0,
    "fat_g": 28.8,
    "fibre_g": 3.3,
    "folate_ug": 5.0,
    "iron_mg": 1.02,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 146.0,
    "protein_g": 9.9,
    "salt_g": 0.94,
    "sat_fat_g": 10.65,
    "sodium_mg": 376.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-643",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
