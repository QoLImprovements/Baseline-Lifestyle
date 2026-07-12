/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2706759",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Greens with ham or pork",
  "nutritionPerBasis": {
    "calcium_mg": 205.0,
    "carbs_g": 4.68,
    "energy_kcal": 47.0,
    "fat_g": 1.41,
    "fibre_g": 3.6,
    "folate_ug": 65.0,
    "iron_mg": 1.1,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 303.0,
    "protein_g": 4.91,
    "salt_g": 0.925,
    "sat_fat_g": 0.277,
    "sodium_mg": 370.0,
    "sugar_g": 0.84,
    "vitamin_a_ug": 222.0,
    "vitamin_c_mg": 40.5,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 364.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706759",
  "state": "Unspecified",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "meat-and-poultry",
    "other-dark-green-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
