/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706393",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stewed seasoned ground beef, Mexican style",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 1.28,
    "energy_kcal": 169.0,
    "fat_g": 11.4,
    "fibre_g": 0.2,
    "folate_ug": 6.0,
    "iron_mg": 1.73,
    "magnesium_mg": 16.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 134.0,
    "potassium_mg": 255.0,
    "protein_g": 14.3,
    "salt_g": 1.16,
    "sat_fat_g": 4.32,
    "sodium_mg": 464.0,
    "sugar_g": 0.41,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706393",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
