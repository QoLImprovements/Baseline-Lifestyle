/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Coleslaw, non-lettuce salads",
  "id": "usda-fndds-2709812",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Broccoli salad with cauliflower, cheese, bacon bits, and dressing",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 10.4,
    "energy_kcal": 270.0,
    "fat_g": 22.8,
    "fibre_g": 1.6,
    "folate_ug": 38.0,
    "iron_mg": 0.36,
    "magnesium_mg": 17.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 97.0,
    "potassium_mg": 162.0,
    "protein_g": 5.83,
    "salt_g": 0.85,
    "sat_fat_g": 5.22,
    "sodium_mg": 340.0,
    "sugar_g": 6.43,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 28.5,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 59.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709812",
  "state": "Unspecified",
  "subcategory": "Coleslaw, non-lettuce salads",
  "tags": [
    "coleslaw-non-lettuce-salads",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
