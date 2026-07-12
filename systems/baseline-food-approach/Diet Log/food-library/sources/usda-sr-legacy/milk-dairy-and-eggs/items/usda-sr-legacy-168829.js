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
  "id": "usda-sr-legacy-168829",
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
  "name": "Puddings, coconut cream, dry mix, regular, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 17.7,
    "energy_kcal": 477.0,
    "fat_g": 3.8,
    "fibre_g": 0.2,
    "folate_ug": 4.0,
    "iron_mg": 0.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 88.0,
    "potassium_mg": 157.0,
    "protein_g": 3.0,
    "salt_g": 0.405,
    "sat_fat_g": 2.57,
    "sodium_mg": 162.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168829",
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
