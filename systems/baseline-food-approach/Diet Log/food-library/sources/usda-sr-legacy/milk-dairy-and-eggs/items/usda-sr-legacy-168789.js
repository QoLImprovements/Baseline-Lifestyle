/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168789",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rennin, chocolate, dry mix, prepared with 2% milk",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 13.5,
    "energy_kcal": 85.0,
    "fat_g": 2.06,
    "fibre_g": 0.5,
    "folate_ug": 5.0,
    "iron_mg": 0.3,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 182.0,
    "protein_g": 3.24,
    "salt_g": 0.13,
    "sat_fat_g": 1.23,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168789",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
