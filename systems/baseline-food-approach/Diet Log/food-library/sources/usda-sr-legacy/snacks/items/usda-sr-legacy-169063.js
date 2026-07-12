/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-169063",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Breakfast bars, oats, sugar, raisins, coconut (include granola bar)",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 66.7,
    "energy_kcal": 464.0,
    "fat_g": 17.6,
    "fibre_g": 3.1,
    "folate_ug": 81.0,
    "iron_mg": 3.18,
    "magnesium_mg": 101.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 277.0,
    "potassium_mg": 326.0,
    "protein_g": 9.8,
    "salt_g": 0.6275,
    "sat_fat_g": 12.7,
    "sodium_mg": 251.0,
    "sugar_g": 27.5,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 15.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169063",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
