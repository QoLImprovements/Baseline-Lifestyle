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
  "id": "usda-sr-legacy-174662",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, Apple and Cinnamon, reduced sugar",
  "nutritionPerBasis": {
    "calcium_mg": 355.0,
    "carbs_g": 72.2,
    "energy_kcal": 1500.0,
    "fat_g": 5.64,
    "fibre_g": 9.7,
    "folate_ug": 284.0,
    "iron_mg": 12.8,
    "magnesium_mg": 104.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 357.0,
    "potassium_mg": 389.0,
    "protein_g": 10.3,
    "salt_g": 1.3375,
    "sat_fat_g": 1.03,
    "sodium_mg": 535.0,
    "sugar_g": 17.8,
    "vitamin_a_ug": 3550.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174662",
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
