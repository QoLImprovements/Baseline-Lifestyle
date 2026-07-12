/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706384",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 186.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-meatball-with-sauce",
      "kind": "unit",
      "label": "1 meatball with sauce"
    }
  ],
  "name": "Swedish meatballs with cream or white sauce",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 6.29,
    "energy_kcal": 170.0,
    "fat_g": 10.3,
    "fibre_g": 0.2,
    "folate_ug": 13.0,
    "iron_mg": 1.42,
    "magnesium_mg": 15.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 133.0,
    "potassium_mg": 204.0,
    "protein_g": 12.5,
    "salt_g": 1.3425,
    "sat_fat_g": 4.54,
    "sodium_mg": 537.0,
    "sugar_g": 2.46,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706384",
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
