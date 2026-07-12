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
  "id": "usda-fndds-2710736",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-scoop",
      "kind": "unit",
      "label": "1 scoop"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Nutritional powder mix, light (Muscle Milk)",
  "nutritionPerBasis": {
    "calcium_mg": 1200.0,
    "carbs_g": 22.0,
    "energy_kcal": 396.0,
    "fat_g": 12.0,
    "fibre_g": 2.0,
    "folate_ug": 280.0,
    "iron_mg": 12.0,
    "magnesium_mg": 280.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 700.0,
    "potassium_mg": 840.0,
    "protein_g": 50.0,
    "salt_g": 0.625,
    "sat_fat_g": 1.09,
    "sodium_mg": 250.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 1050.0,
    "vitamin_c_mg": 42.0,
    "vitamin_e_mg": 9.45,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710736",
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
