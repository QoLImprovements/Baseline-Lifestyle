/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169207",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "spear-about-5-long",
      "kind": "unit",
      "label": "spear (about 5\" long)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "can-300-x-407",
      "kind": "unit",
      "label": "can (300 x 407)"
    }
  ],
  "name": "Asparagus, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.46,
    "energy_kcal": 19.0,
    "fat_g": 0.65,
    "fibre_g": 1.6,
    "folate_ug": 96.0,
    "iron_mg": 1.83,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 172.0,
    "protein_g": 2.14,
    "salt_g": 0.7175,
    "sat_fat_g": 0.147,
    "sodium_mg": 287.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 18.4,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 41.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169207",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
