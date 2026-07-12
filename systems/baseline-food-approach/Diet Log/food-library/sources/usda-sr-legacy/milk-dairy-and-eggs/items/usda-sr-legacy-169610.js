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
  "id": "usda-sr-legacy-169610",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 559.0,
      "key": "package-yield-2-cups",
      "kind": "unit",
      "label": "package yield (2 cups)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Puddings, vanilla, dry mix, regular, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 18.9,
    "energy_kcal": 113.0,
    "fat_g": 2.9,
    "fibre_g": 0.1,
    "folate_ug": 4.0,
    "iron_mg": 0.04,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 119.0,
    "protein_g": 2.8,
    "salt_g": 0.39,
    "sat_fat_g": 1.64,
    "sodium_mg": 156.0,
    "sugar_g": 17.1,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169610",
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
