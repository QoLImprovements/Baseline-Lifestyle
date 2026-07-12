/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "packet-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173926",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, weight control, cinnamon",
  "nutritionPerBasis": {
    "calcium_mg": 245.0,
    "carbs_g": 64.2,
    "energy_kcal": 361.0,
    "fat_g": 6.28,
    "fibre_g": 13.0,
    "folate_ug": 205.0,
    "iron_mg": 8.84,
    "magnesium_mg": 119.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 402.0,
    "potassium_mg": 334.0,
    "protein_g": 16.5,
    "salt_g": 1.545,
    "sat_fat_g": 1.21,
    "sodium_mg": 618.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 2560.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173926",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
