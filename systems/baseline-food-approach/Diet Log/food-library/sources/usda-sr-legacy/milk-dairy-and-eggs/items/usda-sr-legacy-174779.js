/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "roll",
  "description": "Snacks",
  "id": "usda-sr-legacy-174779",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "roll",
      "kind": "unit",
      "label": "Roll"
    }
  ],
  "name": "Snacks, candy rolls, yogurt-covered, fruit flavored with high vitamin C",
  "nutritionPerBasis": {
    "calcium_mg": 430.0,
    "carbs_g": 74.6,
    "energy_kcal": 1500.0,
    "fat_g": 6.53,
    "fibre_g": 3.3,
    "folate_ug": 2.0,
    "iron_mg": 0.56,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 100.0,
    "protein_g": 0.46,
    "salt_g": 0.02,
    "sat_fat_g": 5.1,
    "sodium_mg": 8.0,
    "sugar_g": 39.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 261.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174779",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
