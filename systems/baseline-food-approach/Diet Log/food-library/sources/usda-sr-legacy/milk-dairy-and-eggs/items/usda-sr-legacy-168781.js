/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "package-yield-2-cups",
  "description": "Sweets",
  "id": "usda-sr-legacy-168781",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 587.0,
      "key": "package-yield-2-cups",
      "kind": "unit",
      "label": "package yield (2 cups)"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Puddings, coconut cream, dry mix, instant, prepared with 2% milk",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 19.2,
    "energy_kcal": 448.0,
    "fat_g": 2.3,
    "fibre_g": 0.1,
    "folate_ug": 4.0,
    "iron_mg": 0.15,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 201.0,
    "potassium_mg": 132.0,
    "protein_g": 2.9,
    "salt_g": 0.615,
    "sat_fat_g": 1.37,
    "sodium_mg": 246.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168781",
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
