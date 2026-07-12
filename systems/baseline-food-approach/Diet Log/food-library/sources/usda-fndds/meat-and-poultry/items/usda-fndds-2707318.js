/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707318",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Egg sandwich on English muffin, with ham",
  "nutritionPerBasis": {
    "calcium_mg": 214.0,
    "carbs_g": 19.3,
    "energy_kcal": 222.0,
    "fat_g": 10.7,
    "fibre_g": 1.4,
    "folate_ug": 60.0,
    "iron_mg": 2.35,
    "magnesium_mg": 19.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 204.0,
    "potassium_mg": 135.0,
    "protein_g": 12.2,
    "salt_g": 1.2375,
    "sat_fat_g": 4.44,
    "sodium_mg": 495.0,
    "sugar_g": 2.03,
    "vitamin_a_ug": 112.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707318",
  "state": "Unspecified",
  "subcategory": "Egg/breakfast sandwiches",
  "tags": [
    "egg-breakfast-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
