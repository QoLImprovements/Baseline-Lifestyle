/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-animal-cookie-include-keebler-iced-carousel-frosted",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707969",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-animal-cookie-include-keebler-iced-carousel-frosted",
      "kind": "unit",
      "label": "1 animal cookie (include Keebler Iced; Carousel Frosted)"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cookie, animal, with frosting or icing",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 70.1,
    "energy_kcal": 509.0,
    "fat_g": 24.1,
    "fibre_g": 0.9,
    "folate_ug": 59.0,
    "iron_mg": 1.57,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 96.0,
    "protein_g": 3.0,
    "salt_g": 0.6425,
    "sat_fat_g": 16.2,
    "sodium_mg": 257.0,
    "sugar_g": 41.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707969",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
