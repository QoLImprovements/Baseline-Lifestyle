/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-roll-1-2-breast-with-ham-and-sauce",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706441",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 229.0,
      "key": "1-roll-1-2-breast-with-ham-and-sauce",
      "kind": "unit",
      "label": "1 roll (1/2 breast with ham and sauce)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey cordon bleu",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 9.29,
    "energy_kcal": 210.0,
    "fat_g": 9.17,
    "fibre_g": 0.6,
    "folate_ug": 23.0,
    "iron_mg": 1.13,
    "magnesium_mg": 25.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 244.0,
    "potassium_mg": 255.0,
    "protein_g": 22.6,
    "salt_g": 1.4725,
    "sat_fat_g": 3.33,
    "sodium_mg": 589.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 24.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706441",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
