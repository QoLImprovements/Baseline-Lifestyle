/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-scoop",
  "description": "Protein and nutritional powders",
  "id": "usda-fndds-2710735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-scoop",
      "kind": "unit",
      "label": "1 scoop"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Nutritional powder mix (Muscle Milk)",
  "nutritionPerBasis": {
    "calcium_mg": 500.0,
    "carbs_g": 18.5,
    "energy_kcal": 411.0,
    "fat_g": 17.1,
    "fibre_g": 7.1,
    "folate_ug": 200.0,
    "iron_mg": 8.57,
    "magnesium_mg": 200.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 643.0,
    "potassium_mg": 1130.0,
    "protein_g": 45.7,
    "salt_g": 0.8225,
    "sat_fat_g": 1.55,
    "sodium_mg": 329.0,
    "sugar_g": 5.71,
    "vitamin_a_ug": 750.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 7.07,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710735",
  "state": "Unspecified",
  "subcategory": "Protein and nutritional powders",
  "tags": [
    "milk-dairy-and-eggs",
    "protein-and-nutritional-powders",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
