/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2708715",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-stick-3-x-3-4",
      "kind": "unit",
      "label": "1 stick (3\" x 3/4\")"
    }
  ],
  "name": "Cornmeal stick, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 48.4,
    "energy_kcal": 415.0,
    "fat_g": 21.0,
    "fibre_g": 2.4,
    "folate_ug": 84.0,
    "iron_mg": 2.75,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 100.0,
    "protein_g": 6.92,
    "salt_g": 1.035,
    "sat_fat_g": 4.55,
    "sodium_mg": 414.0,
    "sugar_g": 1.03,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.21,
    "vitamin_k_ug": 16.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708715",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
