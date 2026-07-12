/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-regular",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707341",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Sausage English muffin sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 237.0,
    "carbs_g": 22.8,
    "energy_kcal": 300.0,
    "fat_g": 17.2,
    "fibre_g": 1.7,
    "folate_ug": 49.0,
    "iron_mg": 2.39,
    "magnesium_mg": 22.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 192.0,
    "potassium_mg": 183.0,
    "protein_g": 13.5,
    "salt_g": 1.5375,
    "sat_fat_g": 7.02,
    "sodium_mg": 615.0,
    "sugar_g": 2.51,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707341",
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
