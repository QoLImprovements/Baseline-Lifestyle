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
  "id": "usda-sr-legacy-167686",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Milk dessert, frozen, milk-fat free, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 154.0,
    "carbs_g": 37.7,
    "energy_kcal": 167.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.04,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 123.0,
    "potassium_mg": 333.0,
    "protein_g": 4.3,
    "salt_g": 0.2425,
    "sat_fat_g": 0.597,
    "sodium_mg": 97.0,
    "sugar_g": 37.7,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167686",
  "state": "Frozen",
  "subcategory": "Sweets",
  "tags": [
    "frozen",
    "milk-dairy-and-eggs",
    "sweets"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
